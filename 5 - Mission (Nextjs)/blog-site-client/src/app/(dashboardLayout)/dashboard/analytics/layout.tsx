import { Button } from "@/components/ui/button";
import Link from "next/link";

const AnalyticsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div>
                <Button asChild>
                    <Link href='/dashboard/analytics/weekly'>Weekly</Link>
                </Button>
                <Button>
                    <Link href='/dashboard/analytics/monthly'>Monthly</Link>
                </Button>
            </div>
            {children}
        </div>
    );
};

export default AnalyticsLayout; 