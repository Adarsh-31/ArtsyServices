import { Scissors, Ruler, Shirt, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

export default function App() {
  const services = [
    {
      title: "Hemming & Alterations",
      description: "Pants, skirts, dresses, and sleeve adjustments to achieve the perfect length",
      icon: Ruler,
    },
    {
      title: "Tailoring & Fitting",
      description: "Custom fitting for suits, blazers, and formal wear to enhance your silhouette",
      icon: Shirt,
    },
    {
      title: "Repairs & Restorations",
      description: "Fixing tears, replacing zippers, reattaching buttons, and restoring beloved garments",
      icon: Scissors,
    },
    {
      title: "Resizing",
      description: "Taking in or letting out garments to match your measurements perfectly",
      icon: Sparkles,
    },
    {
      title: "Wedding & Special Occasions",
      description: "Bridal gown alterations, prom dresses, and special event attire",
      icon: Sparkles,
    },
    {
      title: "Custom Adjustments",
      description: "Tapering, darting, and structural modifications for the ideal fit",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1578353022142-09264fd64295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Colorful sewing threads and scissors"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background"></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <div className="flex items-center gap-3 mb-6">
            <Scissors className="w-12 h-12" />
          </div>
          <h1 className="text-6xl md:text-7xl mb-4 tracking-tight">Artsy Fashion Service</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            Expert clothing alterations crafted with precision and care
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From everyday adjustments to special occasion alterations, we bring artistry to every stitch
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4 p-3 bg-secondary rounded-lg w-fit">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="relative h-80 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497997092403-f091fcf5b6c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Sewing machine detail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
              <div className="text-white">
                <h3 className="mb-2 text-white">Quality Craftsmanship</h3>
                <p className="text-white/90">Years of experience ensuring every garment receives meticulous attention</p>
              </div>
            </div>
          </div>

          <div className="relative h-80 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1606501126768-b78d4569d3f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Tailor at work"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
              <div className="text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5" />
                  <h3 className="text-white">Quick Turnaround</h3>
                </div>
                <p className="text-white/90">Most alterations completed within 5-7 business days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Section */}
<div className="max-w-3xl mx-auto px-6 py-20 text-center">
  <h2 className="text-4xl mb-4">Book Your Appointment</h2>
  <p className="text-muted-foreground mb-8">
    Get your perfect fit in just a few clicks
  </p>

  <div className="grid gap-4">
    <input
      className="border p-3 rounded"
      placeholder="Your Name"
    />
    <input
      className="border p-3 rounded"
      placeholder="Phone Number"
    />
    <select className="border p-3 rounded">
      <option>Hemming & Alterations</option>
      <option>Tailoring & Fitting</option>
      <option>Repairs</option>
      <option>Wedding Wear</option>
    </select>

    <button className="bg-black text-white p-3 rounded">
      Submit Booking
    </button>

    <a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      className="text-green-600 font-medium"
    >
      Or Book via WhatsApp
    </a>
  </div>
</div>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Scissors className="w-5 h-5" />
            <span>Artsy Fashion Service</span>
          </div>
          <p className="text-muted-foreground">
            Transforming garments with precision and artistry
          </p>
        </div>
      </footer>
    </div>
  );
}