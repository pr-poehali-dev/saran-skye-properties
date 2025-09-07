import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const properties = [
    {
      id: 1,
      title: "Пентхаус в центре города",
      price: "15 000 000 ₽",
      location: "ул. Советская, 24",
      area: "280 м²",
      rooms: "4 комнаты",
      image: "/img/b5f8022d-56a6-4226-9589-e242c30e636e.jpg",
      description: "Роскошный пентхаус с панорамным видом на город"
    },
    {
      id: 2,
      title: "Особняк премиум-класса",
      price: "32 000 000 ₽",
      location: "Коттеджный поселок 'Резиденция'",
      area: "450 м²",
      rooms: "6 комнат",
      image: "/img/70937646-567c-4fa4-9690-ec458c3651a6.jpg",
      description: "Эксклюзивный особняк с авторским дизайном"
    },
    {
      id: 3,
      title: "Коммерческое здание",
      price: "85 000 000 ₽",
      location: "Деловой квартал",
      area: "1200 м²",
      rooms: "Офисы",
      image: "/img/bc722c0b-0ade-4101-96cd-425cfde93a8b.jpg",
      description: "Современное офисное здание в центре бизнеса"
    }
  ];

  const services = [
    {
      icon: "Crown",
      title: "Эксклюзивная недвижимость",
      description: "Уникальные объекты премиум-класса"
    },
    {
      icon: "Shield",
      title: "Юридическое сопровождение",
      description: "Полная правовая поддержка сделки"
    },
    {
      icon: "Star",
      title: "Персональный подход",
      description: "Индивидуальная работа с каждым клиентом"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Crown" className="h-8 w-8 text-gold" />
              <h1 className="text-2xl font-serif font-bold">Элит Недвижимость</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#hero" className="text-sm font-medium hover:text-gold transition-colors">Главная</a>
              <a href="#catalog" className="text-sm font-medium hover:text-gold transition-colors">Каталог</a>
              <a href="#services" className="text-sm font-medium hover:text-gold transition-colors">Услуги</a>
              <a href="#projects" className="text-sm font-medium hover:text-gold transition-colors">Проекты</a>
              <a href="#about" className="text-sm font-medium hover:text-gold transition-colors">О нас</a>
              <a href="#contact" className="text-sm font-medium hover:text-gold transition-colors">Контакты</a>
            </nav>
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-gold-foreground">
              <Icon name="Phone" className="h-4 w-4 mr-2" />
              Звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-black via-gray-900 to-black py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(212,175,55,0.1)_50%,transparent_75%)]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              Элитная недвижимость 
              <span className="text-gold block mt-2">в Саранске</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Эксклюзивные объекты премиум-класса от 10 миллионов рублей. 
              Инвестиции в будущее с гарантией качества.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground text-lg px-8 py-3">
                <Icon name="Search" className="h-5 w-5 mr-2" />
                Смотреть каталог
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-3">
                <Icon name="Phone" className="h-5 w-5 mr-2" />
                Консультация
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Каталог объектов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Отборные объекты недвижимости с безупречной репутацией и высоким потенциалом
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0 bg-white">
                <div className="relative overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-gold-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {property.price}
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="font-serif text-xl">{property.title}</CardTitle>
                  <CardDescription className="text-base">{property.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Icon name="MapPin" className="h-4 w-4 mr-2 text-gold" />
                      {property.location}
                    </div>
                    <div className="flex items-center">
                      <Icon name="Home" className="h-4 w-4 mr-2 text-gold" />
                      {property.area} • {property.rooms}
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-gold hover:bg-gold/90 text-gold-foreground">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексное обслуживание на всех этапах сделки с недвижимостью
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-8 border-0 bg-muted/10 hover:bg-muted/20 transition-colors">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name={service.icon as any} className="h-8 w-8 text-gold-foreground" />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Реализованные проекты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Более 200 успешных сделок с элитной недвижимостью за последние 5 лет
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-serif font-bold text-gold mb-2">200+</div>
              <div className="text-muted-foreground">Успешных сделок</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-serif font-bold text-gold mb-2">5 млрд</div>
              <div className="text-muted-foreground">Рублей оборот</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-serif font-bold text-gold mb-2">98%</div>
              <div className="text-muted-foreground">Довольных клиентов</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-serif font-bold text-gold mb-2">24/7</div>
              <div className="text-muted-foreground">Поддержка клиентов</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">О компании</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Мы специализируемся на эксклюзивной недвижимости премиум-класса в Саранске. 
              Наша команда профессионалов обеспечивает полное сопровождение сделок от поиска 
              объекта до получения ключей.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Icon name="Award" className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="font-serif font-semibold text-lg mb-2">Экспертиза</h3>
                <p className="text-muted-foreground text-sm">15 лет на рынке недвижимости</p>
              </div>
              <div className="text-center">
                <Icon name="Users" className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="font-serif font-semibold text-lg mb-2">Команда</h3>
                <p className="text-muted-foreground text-sm">Профессионалы высокого класса</p>
              </div>
              <div className="text-center">
                <Icon name="Heart" className="h-12 w-12 text-gold mx-auto mb-4" />
                <h3 className="font-serif font-semibold text-lg mb-2">Доверие</h3>
                <p className="text-muted-foreground text-sm">Безупречная репутация</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white">Контакты</h2>
            <p className="text-xl text-gray-300 mb-12">
              Свяжитесь с нами для получения персональной консультации
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Icon name="Phone" className="h-8 w-8 text-gold mx-auto mb-4" />
                <h3 className="font-serif font-semibold text-lg mb-2 text-white">Телефон</h3>
                <p className="text-gray-300">+7 (8342) 555-123</p>
              </div>
              <div className="text-center">
                <Icon name="Mail" className="h-8 w-8 text-gold mx-auto mb-4" />
                <h3 className="font-serif font-semibold text-lg mb-2 text-white">Email</h3>
                <p className="text-gray-300">info@elit-realty.ru</p>
              </div>
              <div className="text-center">
                <Icon name="MapPin" className="h-8 w-8 text-gold mx-auto mb-4" />
                <h3 className="font-serif font-semibold text-lg mb-2 text-white">Адрес</h3>
                <p className="text-gray-300">г. Саранск, ул. Советская, 45</p>
              </div>
            </div>
            
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-gold-foreground text-lg px-8 py-3">
              <Icon name="MessageCircle" className="h-5 w-5 mr-2" />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 bg-muted/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Crown" className="h-6 w-6 text-gold" />
              <span className="font-serif font-bold text-lg">Элит Недвижимость</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Элит Недвижимость. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;