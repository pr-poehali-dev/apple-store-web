import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'iPhone Pro',
    tagline: 'Мощь. Красота. Инновация.',
    price: '99 990 ₽',
    image: 'https://cdn.poehali.dev/projects/c1da7929-524d-42b1-a588-682635787df3/files/0570a36c-15e3-4dee-adb4-d1acc9cd9225.jpg',
    features: ['A17 Pro чип', '6.7" дисплей', 'Тройная камера']
  },
  {
    id: 2,
    name: 'AirPods Max',
    tagline: 'Звук нового уровня.',
    price: '64 990 ₽',
    image: 'https://cdn.poehali.dev/projects/c1da7929-524d-42b1-a588-682635787df3/files/edf102e8-7aad-4017-ab1a-1727c2123ffe.jpg',
    features: ['Активное шумоподавление', '20 часов работы', 'Пространственный звук']
  },
  {
    id: 3,
    name: 'MacBook Pro',
    tagline: 'Невероятная производительность.',
    price: '199 990 ₽',
    image: 'https://cdn.poehali.dev/projects/c1da7929-524d-42b1-a588-682635787df3/files/8e190410-4982-4ba8-a2d3-75120316bb92.jpg',
    features: ['M3 Pro чип', '16" Retina XDR', 'До 22 часов автономности']
  }
];

export default function Index() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-semibold tracking-tight">Store</h1>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-accent transition-colors">Магазин</a>
              <a href="#" className="hover:text-accent transition-colors">Mac</a>
              <a href="#" className="hover:text-accent transition-colors">iPhone</a>
              <a href="#" className="hover:text-accent transition-colors">Аксессуары</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hover:bg-black/5">
              <Icon name="Search" size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-black/5">
              <Icon name="ShoppingBag" size={18} />
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-12 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <h2 className="text-7xl md:text-8xl font-bold tracking-tighter mb-6">
            Новое поколение
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
            Технологии, меняющие мир
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8 bg-accent hover:bg-accent/90 text-white">
              Купить
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              Узнать больше
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-muted-foreground" />
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-5xl font-bold tracking-tight mb-4">Выбор профессионалов</h3>
            <p className="text-xl text-muted-foreground">Лучшие устройства для работы и творчества</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="border-none shadow-none bg-gray-50 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="aspect-square bg-white flex items-center justify-center p-8 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-700"
                    style={{
                      transform: hoveredProduct === product.id ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      Новинка
                    </span>
                  </div>
                  <h4 className="text-2xl font-semibold mb-2">{product.name}</h4>
                  <p className="text-muted-foreground mb-4 text-sm">{product.tagline}</p>
                  <div className="mb-6 space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-accent" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-semibold">{product.price}</span>
                    <Button 
                      className="rounded-full bg-black hover:bg-black/90 text-white"
                      size="sm"
                    >
                      Купить
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h3 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Доставка и самовывоз
          </h3>
          <p className="text-xl text-gray-400 mb-12">
            Бесплатная доставка всех заказов. Получите покупку уже завтра.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-3">
              <Icon name="Truck" size={32} className="mx-auto text-accent" />
              <h4 className="font-semibold">Быстрая доставка</h4>
              <p className="text-sm text-gray-400">Доставим за 1-2 дня</p>
            </div>
            <div className="space-y-3">
              <Icon name="Shield" size={32} className="mx-auto text-accent" />
              <h4 className="font-semibold">Гарантия качества</h4>
              <p className="text-sm text-gray-400">2 года гарантии</p>
            </div>
            <div className="space-y-3">
              <Icon name="Headphones" size={32} className="mx-auto text-accent" />
              <h4 className="font-semibold">Поддержка 24/7</h4>
              <p className="text-sm text-gray-400">Всегда на связи</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h5 className="font-semibold mb-3">Магазин</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Mac</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">iPhone</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">iPad</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Поддержка</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Гарантия</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Возврат</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Компания</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Вакансии</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Соцсети</h5>
              <div className="flex gap-4">
                <a href="#" className="hover:text-accent transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 Store. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
