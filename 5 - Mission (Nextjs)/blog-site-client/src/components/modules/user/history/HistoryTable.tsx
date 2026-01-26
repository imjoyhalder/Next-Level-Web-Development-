import { Table, TableBody, TableHead, TableHeader, TableCell, TableRow } from "@/components/ui/table";
import { BlogPost } from "@/types";

const HistoryTable = ({ posts }: { posts: BlogPost[] }) => {
    return (
        <div className="border rounded-md">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Title</TableHead>
                        <TableHead>Tags</TableHead>
                        <TableHead>Views</TableHead>
                        <TableHead className="text-right">Is Feature</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {posts.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.title}</TableCell>
                            <TableCell>{item.tags?.map((tag)=> (<p key={tag} className="inline-block bg-gray-500 text-white text-xs px-2 py-1 rounded-xl mr-1">{tag}</p>))}</TableCell>
                            <TableCell>{item.views}</TableCell>
                            <TableCell className="text-right">{item.isFeatured}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default HistoryTable;
