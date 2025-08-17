export default function Testimonials() {
  return (
    <section className="bg-doola-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="text-sm text-doola-dark font-medium">10,000+ Founders</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold text-black text-center mb-16">
          Built for Founders. Loved by Founders.
        </h2>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150" 
              alt="Adam Fuller" 
              className="w-16 h-16 rounded-full object-cover mb-4" 
            />
            <p className="text-doola-dark mb-6">
              "doola handled Flagaholics' legal and financial setup so we could focus on growth & delivering a great customer experience."
            </p>
            <div>
              <div className="font-bold text-black">Adam Fuller</div>
              <div className="text-sm text-doola-dark">Co-Founder of Flagaholics</div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150" 
              alt="Deon Bryan" 
              className="w-16 h-16 rounded-full object-cover mb-4" 
            />
            <p className="text-doola-dark mb-6">
              "The ease of setup, combined with the resources available through doola, helped me get things done efficiently."
            </p>
            <div>
              <div className="font-bold text-black">Deon Bryan</div>
              <div className="text-sm text-doola-dark">CEO at Viteranz</div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150" 
              alt="Alex Lieberman" 
              className="w-16 h-16 rounded-full object-cover mb-4" 
            />
            <p className="text-doola-dark mb-6">
              "I thought it was very smooth, it was done within a day and all I hit was like 5 buttons."
            </p>
            <div>
              <div className="font-bold text-black">Alex Lieberman</div>
              <div className="text-sm text-doola-dark">Founder of storyarb</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
