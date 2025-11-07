// FullWidthImage.tsx

interface FullWidthImageProps {
    imageUrl: string;
    alt: string;
    overlayText?: string;
    height?: string;
    type?: 'image' | 'gif';
}

export function FullWidthImage({
                                   imageUrl,
                                   alt,
                                   overlayText,
                                   height = "h-96",
                                   type = 'image'
                               }: FullWidthImageProps) {
    const isGif = type === 'gif';

    return (
        <section className="w-full relative overflow-hidden group">
            <div className={`w-full ${height} relative`}>
                {/* Background with enhanced effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 z-0"></div>

                {/* Image/GIF with enhanced zoom effect */}
                {isGif ? (
                    <img
                        src={imageUrl}
                        alt={alt}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    />
                ) : (
                    <img
                        src={imageUrl}
                        alt={alt}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                )}

                {/* Enhanced gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${
                    isGif
                        ? 'from-black/40 via-black/20 to-transparent'
                        : 'from-black/30 via-transparent to-black/20'
                } group-hover:from-black/50 transition-all duration-500`}></div>

                {/* Additional animated gradient for GIF */}
                {isGif && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 animate-pulse"></div>
                )}

                {/* Enhanced overlay text */}
                {overlayText && (
                    <div className="absolute bottom-8 left-8 right-8 z-20">
                        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 max-w-lg transform group-hover:scale-105 transition-all duration-500 shadow-2xl border border-white/20">
                            <p className="text-gray-800 text-xl font-bold leading-relaxed">{overlayText}</p>
                            {/* Decorative gradient line */}
                            <div className="absolute bottom-0 left-6 right-6 h-1 bg-gradient-to-r from-primary to-secondary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200"></div>
                        </div>
                    </div>
                )}

                {/* Enhanced floating elements */}
                <div className="absolute top-8 right-8 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full animate-ping shadow-lg"></div>
                <div className="absolute bottom-8 right-8 w-8 h-8 bg-gradient-to-br from-secondary to-primary rounded-full animate-bounce shadow-lg"></div>
                <div className="absolute top-1/2 left-8 w-4 h-4 bg-white/80 rounded-full animate-pulse shadow-lg"></div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl"></div>
                <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-secondary/30 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/30 rounded-bl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-secondary/30 rounded-br-2xl"></div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            {/* Section divider */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        </section>
    );
}