import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/CTAFooter";
import { useAuth } from "@/contexts/AuthContext";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import FadeIn from "@/components/ui/FadeIn";
import { Loader2, Package, Calendar, Clock } from "lucide-react";
import SEO from "@/components/SEO";

interface Order {
    id: string;
    serviceName: string;
    price: string;
    status: string;
    date: any;
    paymentMethod: string;
}

const Profile = () => {
    const { currentUser } = useAuth();
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            if (!currentUser?.email) return;

            try {
                const q = query(
                    collection(db, "orders"),
                    where("email", "==", currentUser.email),
                    orderBy("date", "desc")
                );

                const querySnapshot = await getDocs(q);
                const fetchedOrders = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                })) as Order[];

                setOrders(fetchedOrders);
            } catch (error) {
                console.error("Error fetching orders:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [currentUser]);

    if (!currentUser) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <p className="text-foreground">Please login to view your profile.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
            <SEO
                title="My Profile"
                description="View your order history and account details at SSCODEHUB."
            />
            <Navbar />

            <section className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* User Header */}
                    <FadeIn>
                        <div className="flex items-center gap-6 mb-12 p-8 rounded-2xl bg-card border border-border/60">
                            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-3xl font-bold text-primary border border-primary/30">
                                {currentUser.displayName?.charAt(0) || currentUser.email?.charAt(0)}
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold mb-1">{currentUser.displayName || "User"}</h1>
                                <p className="text-muted-foreground">{currentUser.email}</p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Orders Section */}
                    <FadeIn delay={0.1}>
                        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <Package className="w-5 h-5 text-primary" />
                            Order History
                        </h2>
                    </FadeIn>

                    {loading ? (
                        <div className="flex justify-center py-12">
                            <Loader2 className="w-8 h-8 animate-spin text-primary" />
                        </div>
                    ) : orders.length > 0 ? (
                        <div className="space-y-4">
                            {orders.map((order, index) => (
                                <FadeIn key={order.id} delay={index * 0.05 + 0.2}>
                                    <div className="p-6 rounded-xl bg-card border border-border/60 hover:border-primary/40 transition-colors">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <div>
                                                <h3 className="font-bold text-lg mb-1">{order.serviceName}</h3>
                                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                    <span className="flex items-center gap-1.5">
                                                        <Calendar className="w-4 h-4" />
                                                        {new Date(order.date?.seconds * 1000).toLocaleDateString()}
                                                    </span>
                                                    <span className="font-mono text-foreground font-medium">
                                                        {order.price}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className={`px-3 py-1 rounded-full text-xs font-medium border ${order.status === 'completed' ? 'bg-green-500/10 text-green-500 border-green-500/20' :
                                                        order.status === 'pending' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20' :
                                                            'bg-red-500/10 text-red-500 border-red-500/20'
                                                    }`}>
                                                    {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                                </div>
                                                <div className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-muted-foreground border border-border/40">
                                                    {order.paymentMethod === 'upi' ? 'Manual UPI' : 'Razorpay'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    ) : (
                        <FadeIn delay={0.2}>
                            <div className="text-center py-16 rounded-2xl bg-secondary/20 border border-dashed border-border">
                                <Package className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
                                <h3 className="text-lg font-medium text-foreground mb-1">No orders yet</h3>
                                <p className="text-muted-foreground text-sm">Your purchased services will appear here.</p>
                            </div>
                        </FadeIn>
                    )}
                </div>
            </section>

            <CTAFooter />
        </div>
    );
};

export default Profile;
