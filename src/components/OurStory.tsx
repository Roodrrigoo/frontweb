export function OurStory() {
  return <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Story
              </span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>

            <div className="relative bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-primary/10">
              <p className="text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                At TechPup HugVest we are dedicated to making the world a better
                place by using technology to enhance the lives of pets and their
                owners.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                  We believe that every pet deserves to feel loved, safe, and connected to their human companions. Through innovative AI technology and our anxiety relief system, we've created a solution that bridges the gap between humans and their furry friends, providing comfort and emotional support whenever it's needed most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}