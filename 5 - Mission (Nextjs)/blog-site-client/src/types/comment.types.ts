export type Comment = {
    id: string;
    content: string;
    authorId: string;
    postId: string;
    parentId: string | null;
    status: "PENDING" | "APPROVED" | "REJECTED";
    createdAt: string;
    updatedAt: string;
    replies: Comment[];
};
