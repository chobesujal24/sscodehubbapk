import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Zap, Building2, Upload, Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { db, storage } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from "sonner";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    serviceName: string;
    price: string;
}

const BookingModal = ({ isOpen, onClose, serviceName, price }: BookingModalProps) => {
    const { currentUser } = useAuth();
    const [paymentMethod, setPaymentMethod] = useState<"razorpay" | "upi">("razorpay");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [screenshot, setScreenshot] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const numericPrice = price.replace(/[^0-9]/g, "");

    useEffect(() => {
        if (currentUser) {
            setName(currentUser.displayName || "");
            setEmail(currentUser.email || "");
        }
    }, [currentUser, isOpen]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setScreenshot(e.target.files[0]);
        }
    };

    const handleSubmit = async () => {
        if (!name || !email || !phone) {
            toast.error("Please fill in all details");
            return;
        }

        if (paymentMethod === "upi" && !screenshot) {
            toast.error("Please upload payment screenshot");
            return;
        }

        setLoading(true);

        try {
            let screenshotUrl = "";

            if (screenshot) {
                const storageRef = ref(storage, `payment-screenshots/${Date.now()}_${screenshot.name}`);
                await uploadBytes(storageRef, screenshot);
                screenshotUrl = await getDownloadURL(storageRef);
            }

            await addDoc(collection(db, "orders"), {
                userId: currentUser?.uid || "guest",
                serviceName,
                price,
                name,
                email,
                phone,
                paymentMethod,
                screenshotUrl,
                status: "pending",
                date: serverTimestamp()
            });

            toast.success("Booking request submitted successfully!");
            onClose();
        } catch (error) {
            console.error("Booking Error:", error);
            toast.error("Failed to submit booking. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden bg-card border border-border/60">
                <div className="p-6">
                    <DialogHeader className="mb-6">
                        <DialogTitle className="text-center text-xl font-black tracking-wide text-foreground uppercase">
                            Book Service
                        </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-6">
                        {/* Client Info */}
                        <div className="space-y-3 bg-secondary/40 rounded-xl p-4">
                            <h3 className="text-sm font-bold text-foreground">Client Info</h3>
                            <div className="space-y-3">
                                <Input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Full Name"
                                    className="bg-background border-border/40 h-10 rounded-lg text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-1 focus-visible:ring-primary/40"
                                />
                                <Input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email Address"
                                    type="email"
                                    className="bg-background border-border/40 h-10 rounded-lg text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-1 focus-visible:ring-primary/40"
                                />
                                <Input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="Phone Number (Required)"
                                    type="tel"
                                    required
                                    className="bg-background border-border/40 h-10 rounded-lg text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-1 focus-visible:ring-primary/40"
                                />
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="space-y-2">
                            <h3 className="text-sm font-bold text-foreground">Payment Method</h3>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => setPaymentMethod("razorpay")}
                                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl transition-all ${paymentMethod === "razorpay"
                                        ? "glass-btn-dark"
                                        : "glass-btn text-foreground"
                                        }`}
                                >
                                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === "razorpay" ? "border-primary-foreground/60" : "border-muted-foreground"}`}>
                                        {paymentMethod === "razorpay" && <div className="w-2 h-2 rounded-full bg-primary-foreground/80" />}
                                    </div>
                                    <span className="text-sm font-medium">Razorpay</span>
                                    <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                </button>

                                <button
                                    onClick={() => setPaymentMethod("upi")}
                                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl transition-all ${paymentMethod === "upi"
                                        ? "glass-btn-dark"
                                        : "glass-btn text-foreground"
                                        }`}
                                >
                                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === "upi" ? "border-primary-foreground/60" : "border-muted-foreground"}`}>
                                        {paymentMethod === "upi" && <div className="w-2 h-2 rounded-full bg-primary-foreground/80" />}
                                    </div>
                                    <span className="text-sm font-medium">Manual UPI</span>
                                    <Building2 className="w-4 h-4" />
                                </button>
                            </div>

                            {paymentMethod === "upi" && (
                                <div className="mt-4 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium text-foreground">Send payment to:</span>
                                        <div className="flex items-center gap-2">
                                            <code className="bg-background/50 px-2 py-1 rounded text-sm font-mono font-bold text-primary">xsujal@fam</code>
                                        </div>
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        Please send <strong>{price}</strong> to the UPI ID above and upload the screenshot below.
                                    </div>
                                    <div className="space-y-1.5">
                                        <Label htmlFor="screenshot" className="text-xs font-semibold text-foreground uppercase tracking-wider">
                                            Upload Screenshot
                                        </Label>
                                        <div className="relative">
                                            <Input
                                                id="screenshot"
                                                type="file"
                                                accept="image/*"
                                                onChange={handleFileChange}
                                                className="hidden"
                                            />
                                            <label
                                                htmlFor="screenshot"
                                                className="flex items-center justify-center gap-2 w-full h-10 rounded-lg border border-dashed border-border/60 bg-secondary/20 cursor-pointer hover:bg-secondary/40 transition-colors"
                                            >
                                                <Upload className="w-4 h-4 text-muted-foreground" />
                                                <span className="text-sm text-muted-foreground">
                                                    {screenshot ? screenshot.name : "Choose File"}
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Service & Price */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-2 space-y-1">
                                <h3 className="text-sm font-bold text-foreground">Service</h3>
                                <div className="bg-secondary/40 px-4 py-2.5 rounded-lg border border-border/40 text-sm font-medium text-foreground">
                                    {serviceName}
                                </div>
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-sm font-bold text-foreground">Price</h3>
                                <div className="bg-secondary/40 px-4 py-2.5 rounded-lg border border-border/40 text-sm font-medium text-foreground">
                                    {numericPrice}
                                </div>
                            </div>
                        </div>

                        {/* Coupon Code */}
                        <div className="space-y-1">
                            <h3 className="text-sm font-bold text-foreground">Coupon Code</h3>
                            <div className="flex gap-2">
                                <Input
                                    placeholder="PROMO CODE"
                                    className="bg-secondary/40 border-border/40 h-10 rounded-lg text-foreground placeholder:text-muted-foreground/60 uppercase focus-visible:ring-1 focus-visible:ring-primary/40"
                                />
                                <button className="glass-btn h-10 px-6 rounded-lg font-bold text-xs tracking-wider text-foreground">
                                    APPLY
                                </button>
                            </div>
                        </div>

                        {/* Agreement */}
                        <div className="flex items-start gap-2 pt-2">
                            <Checkbox id="terms" className="mt-0.5 border-border/60" />
                            <Label htmlFor="terms" className="text-xs text-muted-foreground leading-tight cursor-pointer">
                                I agree to the <a href="/refund" className="underline hover:text-foreground">Refund Policy</a>, <a href="/privacy" className="underline hover:text-foreground">Privacy Policy</a>, and <a href="/terms" className="underline hover:text-foreground">Terms & Conditions</a>.
                            </Label>
                        </div>

                        {/* Book Now Button */}
                        <div className="pt-2">
                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                className="w-full h-12 glass-btn-dark rounded-full font-bold text-sm tracking-wide group flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : (
                                    <>
                                        BOOK NOW <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default BookingModal;
