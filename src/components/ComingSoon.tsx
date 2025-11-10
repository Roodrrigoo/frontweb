// src/components/ComingSoon.tsx
export function ComingSoon() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
            <div className="text-center text-white">
                <div className="mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 shadow-2xl animate-pulse">
                        TP
                    </div>
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Coming Soon
                    </h1>
                    <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
                        We're working hard to bring you something amazing. Stay tuned!
                    </p>
                </div>

                <div className="space-y-4">
                    <a
                        href="/"
                        className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    >
                        Return Home
                    </a>
                    <div className="text-gray-400 text-sm">
                        <p>TechPup HugVest - Revolutionizing pet care with AI-powered technology</p>
                    </div>
                </div>
            </div>
        </div>
    );
}