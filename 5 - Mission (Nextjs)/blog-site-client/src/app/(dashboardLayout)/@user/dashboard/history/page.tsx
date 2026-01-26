import HistoryTable from '@/components/modules/user/history/HistoryTable';
import { blogService } from '@/services/blog.service';
import React from 'react';

const HistoryPage = async () => {
    const response = await blogService.getBlogPost()
    const post = response.data?.data || []
    return (
        <div className='p-6'>
            <h1 className='text-2xl font-bold mb-6'>Blog post history</h1>
            <HistoryTable/>
        </div>
    );
};

export default HistoryPage;