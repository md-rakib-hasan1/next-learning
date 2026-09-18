import React from 'react';

interface PageProps{
    params: Promise<{
        slug:string[];
    }>;
}

const BlogsPage =async ({params}:PageProps) => {
    const {slug}=await params;

    return (
        <div>
            <h1>Documentation</h1>
            <p>Blog Path: {slug.join(" / ")}</p>
            
        </div>
    );
};

export default BlogsPage;