import { Card } from "@/components/card";
import  Link from "next/link";

export default function ArchivedNotification(){
    return (
        <Card>
             Archived Notifications
            <div>
                <Link href ="/complex-dashboard">
                Default Page 
                 </Link>
            </div>
        </Card>
    )
}