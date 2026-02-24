export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 bg-bg flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="relative h-12 w-12">
                    <div className="absolute inset-0 rounded-full border-2 border-ink-400/20" />
                    <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan animate-spin" />
                </div>
                <p className="text-ink-300 text-sm animate-pulse">Loading...</p>
            </div>
        </div>
    );
}
