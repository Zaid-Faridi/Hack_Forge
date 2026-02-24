import { CardSkeleton } from '@/components/ui/Skeleton';

export default function ExploreLoading() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="animate-pulse space-y-4 mb-8">
                <div className="h-10 w-64 bg-surface2 rounded-xl" />
                <div className="h-5 w-96 bg-surface2 rounded-lg" />
            </div>
            <div className="h-14 w-full bg-surface2 rounded-2xl mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                    <CardSkeleton key={i} />
                ))}
            </div>
        </div>
    );
}
