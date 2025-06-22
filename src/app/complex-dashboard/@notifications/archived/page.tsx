import { Card } from "@/components/card";
import  Link from "next/link";

export default function ArchivedNotification(){
    return (
        <Card>
            <h1 className="text-2xl font-bold mb-4">Archived Notifications</h1>
            <div>
                <Link href ="/complex-dashboard/">
                Default Page 
                 </Link>
            </div>
        </Card>
    )
}