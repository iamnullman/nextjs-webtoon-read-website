import { NextSeo } from 'next-seo';
import MiniCard from "@/components/Card/Mini"
import { useEffect, useState } from "react";
import MangaCard from "@/components/Card/MangaCard";
import Tippy from '@tippyjs/react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import moment from 'moment/moment';
import ScrollToTopButton from '@/components/ScroolTopButton';

export default function Home() {

    return (
        <>
            <NextSeo title={"I Picked A Hammer To Save The World"} />
            <div class="flex flex-col space-y-8">
                <img class="max-w-full h-auto" src="https://www.mangaread.org/wp-content/uploads/WP-manga/data/manga_63a6789cc237d/cdb86629a6a59e1cce23c9a27d9d06f2/2.jpg" alt="Image 1" />
                <img class="max-w-full h-auto" src="https://www.mangaread.org/wp-content/uploads/WP-manga/data/manga_63a6789cc237d/cdb86629a6a59e1cce23c9a27d9d06f2/3.jpg" alt="Image 2" />
                <img class="max-w-full h-auto" src="https://www.mangaread.org/wp-content/uploads/WP-manga/data/manga_63a6789cc237d/cdb86629a6a59e1cce23c9a27d9d06f2/4.jpg" alt="Image 3" />
                <img class="max-w-full h-auto" src="https://www.mangaread.org/wp-content/uploads/WP-manga/data/manga_63a6789cc237d/cdb86629a6a59e1cce23c9a27d9d06f2/5.jpg" alt="Image 4" />
            </div>
            <ScrollToTopButton />

        </>
    )
}