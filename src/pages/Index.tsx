import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background cyber-grid">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-md border-b border-primary/20 neon-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-primary tech-glow">⚡ TECH MARKETPLACE</h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-foreground/70 hover:text-primary transition-all hover:glow">ГЛАВНАЯ</a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-all hover:glow">КАТАЛОГ</a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-all hover:glow">КАБИНЕТ</a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-all hover:glow">ЗАКАЗЫ</a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-all hover:glow">ПОДДЕРЖКА</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="outline">Войти</Button>
              <Button>Регистрация</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-purple-600 to-cyan-600 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-600/20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
            CYBER B2B PLATFORM
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 font-mono">
            {">> Соединяем корпорации через нейросеть будущего"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder=">> ПОИСК В БАЗЕ ДАННЫХ..." 
              className="bg-black/50 text-white border border-primary/50 placeholder:text-gray-400 tech-glow font-mono"
            />
            <Button size="lg" className="bg-primary tech-glow hover:bg-primary/80 font-mono">
              <Icon name="Search" size={20} className="mr-2" />
              СКАНИРОВАТЬ
            </Button>
          </div>
        </div>
      </section>

      {/* Verification System */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary mb-4 font-mono tech-glow">НЕЙРО-ВЕРИФИКАЦИЯ</h3>
            <p className="text-lg text-foreground/70 font-mono">ИИ анализирует надежность корпораций</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 tech-glow">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-primary font-mono">КВАНТОВАЯ ПРОВЕРКА</h4>
              <p className="text-foreground/70 font-mono text-sm">ИИ сканирует блокчейн документов</p>
              <Badge className="mt-4 bg-green-500/20 text-green-400 border border-green-500/50 font-mono">ОНЛАЙН</Badge>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 tech-glow">
                <Icon name="FileText" size={32} className="text-cyan-400" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-cyan-400 font-mono">ЦИФРОВОЙ ОБОРОТ</h4>
              <p className="text-foreground/70 font-mono text-sm">Крипто-подпись смарт-контрактов</p>
              <Badge className="mt-4 bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 font-mono">АКТИВАЦИЯ</Badge>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 tech-glow">
                <Icon name="Award" size={32} className="text-purple-400" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-purple-400 font-mono">НЕЙРО-СКОРИНГ</h4>
              <p className="text-foreground/70 font-mono text-sm">Машинное обучение риск-метрик</p>
              <Badge className="mt-4 bg-purple-500/20 text-purple-400 border border-purple-500/50 font-mono">ПРО</Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-16 bg-card/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-3xl font-bold text-primary font-mono tech-glow">ЦИФРОВОЙ КАТАЛОГ</h3>
            <Button variant="outline">
              Весь каталог
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>

          <Tabs defaultValue="industrial" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="industrial">Промышленное оборудование</TabsTrigger>
              <TabsTrigger value="office">Офисная мебель</TabsTrigger>
              <TabsTrigger value="medical">Медицинское оборудование</TabsTrigger>
            </TabsList>
            
            <TabsContent value="industrial" className="mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-slate-100 flex items-center justify-center">
                    <img 
                      src="/img/9f36ac69-7d2d-41eb-a422-afc1dc28eb38.jpg" 
                      alt="CNC машина"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-primary/20 text-primary border border-primary/50 font-mono">ИНДУСТРИЯ</Badge>
                      <Badge className="bg-green-500/20 text-green-400 border border-green-500/50 font-mono">ВЕРИФИК</Badge>
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-primary font-mono">CNC-МОДУЛЬ 3000X</h4>
                    <p className="text-foreground/70 text-sm mb-4 font-mono">Нейро-управляемый прецизионный станок</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary font-mono tech-glow">₽ 2.45M</span>
                      <Button size="sm" className="bg-primary tech-glow hover:bg-primary/80 font-mono">АКТИВАЦИЯ</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-slate-100 flex items-center justify-center">
                    <Icon name="Settings" size={64} className="text-slate-400" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">Промышленность</Badge>
                      <Badge className="bg-green-100 text-green-700">Верифицировано</Badge>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Компрессорная установка</h4>
                    <p className="text-slate-600 text-sm mb-4">Надежное промышленное оборудование для сжатого воздуха</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">₽ 890 000</span>
                      <Button size="sm">В корзину</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-slate-100 flex items-center justify-center">
                    <Icon name="Zap" size={64} className="text-slate-400" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">Электрооборудование</Badge>
                      <Badge className="bg-green-100 text-green-700">Верифицировано</Badge>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Электрощитовое оборудование</h4>
                    <p className="text-slate-600 text-sm mb-4">Комплектные распределительные устройства</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">₽ 125 000</span>
                      <Button size="sm">В корзину</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="office" className="mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-slate-100 flex items-center justify-center">
                    <img 
                      src="/img/e65941f5-2771-445d-a88d-d2a8457c22e4.jpg" 
                      alt="Офисная мебель"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">Мебель</Badge>
                      <Badge className="bg-green-100 text-green-700">Верифицировано</Badge>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Эргономичное рабочее место</h4>
                    <p className="text-slate-600 text-sm mb-4">Комплект: стол и кресло для современного офиса</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">₽ 45 000</span>
                      <Button size="sm">В корзину</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-slate-100 flex items-center justify-center">
                    <Icon name="Building" size={64} className="text-slate-400" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">Мебель</Badge>
                      <Badge className="bg-green-100 text-green-700">Верифицировано</Badge>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Офисные шкафы</h4>
                    <p className="text-slate-600 text-sm mb-4">Системы хранения документов и личных вещей</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">₽ 32 000</span>
                      <Button size="sm">В корзину</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-slate-100 flex items-center justify-center">
                    <Icon name="Users" size={64} className="text-slate-400" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">Мебель</Badge>
                      <Badge className="bg-green-100 text-green-700">Верифицировано</Badge>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Конференц-стол</h4>
                    <p className="text-slate-600 text-sm mb-4">Стол для переговоров на 12 человек</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">₽ 85 000</span>
                      <Button size="sm">В корзину</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="medical" className="mt-8">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-slate-100 flex items-center justify-center">
                    <img 
                      src="/img/7910419e-9817-4809-b8aa-c5fa7f000ba3.jpg" 
                      alt="Медицинское оборудование"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">Медицина</Badge>
                      <Badge className="bg-green-100 text-green-700">Верифицировано</Badge>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Диагностический сканер</h4>
                    <p className="text-slate-600 text-sm mb-4">Современное оборудование для медицинской диагностики</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">₽ 1 850 000</span>
                      <Button size="sm">В корзину</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-slate-100 flex items-center justify-center">
                    <Icon name="Heart" size={64} className="text-slate-400" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">Медицина</Badge>
                      <Badge className="bg-green-100 text-green-700">Верифицировано</Badge>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Кардиограф портативный</h4>
                    <p className="text-slate-600 text-sm mb-4">Портативное оборудование для ЭКГ исследований</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">₽ 245 000</span>
                      <Button size="sm">В корзину</Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-slate-100 flex items-center justify-center">
                    <Icon name="Microscope" size={64} className="text-slate-400" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">Лаборатория</Badge>
                      <Badge className="bg-green-100 text-green-700">Верифицировано</Badge>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Лабораторный микроскоп</h4>
                    <p className="text-slate-600 text-sm mb-4">Цифровой микроскоп для лабораторных исследований</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">₽ 180 000</span>
                      <Button size="sm">В корзину</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Orders & Support */}
      <section className="py-16 bg-card/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Orders Management */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 font-mono tech-glow">КОММАНДНЫЙ ЦЕНТР</h3>
              <div className="space-y-4">
                <Card className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback>ТК</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-primary font-mono">ОРДЕР #TXN-001</h4>
                        <p className="text-sm text-foreground/70 font-mono">КОРП "TECHCOMP"</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500/20 text-green-400 border border-green-500/50 font-mono">КОМПЛИТ</Badge>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm text-foreground/70 font-mono">CNC-МОДУЛЬ 3000X</span>
                    <span className="font-semibold text-primary font-mono">₽ 2.45M</span>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback>МС</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">Заказ #B2B-2024-002</h4>
                        <p className="text-sm text-slate-600">ЗАО "МедСнаб"</p>
                      </div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700">В обработке</Badge>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm text-slate-600">Диагностический сканер</span>
                    <span className="font-semibold">₽ 1 850 000</span>
                  </div>
                </Card>

                <Card className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback>ОФ</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">Заказ #B2B-2024-003</h4>
                        <p className="text-sm text-slate-600">ООО "ОфисГрупп"</p>
                      </div>
                    </div>
                    <Badge className="bg-yellow-100 text-yellow-700">Ожидает оплаты</Badge>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm text-slate-600">Офисная мебель (комплект)</span>
                    <span className="font-semibold">₽ 162 000</span>
                  </div>
                </Card>
              </div>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6 font-mono tech-glow">СИСТЕМНАЯ ПОДДЕРЖКА</h3>
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center tech-glow">
                      <Icon name="Headphones" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary font-mono">НЕЙРО-ПОДДЕРЖКА</h4>
                      <p className="text-sm text-foreground/70 font-mono">24/7 КВАНТОВЫЙ АССИСТЕНТ</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><strong>Телефон:</strong> +7 (495) 123-45-67</p>
                    <p><strong>Email:</strong> support@b2bmarket.ru</p>
                    <p><strong>Онлайн-чат:</strong> Доступен круглосуточно</p>
                  </div>
                </Card>

                <Card className="p-6">
                  <h4 className="font-semibold mb-3">О платформе</h4>
                  <p className="text-sm text-slate-600 mb-4">
                    Мы объединяем российские компании для эффективной B2B торговли. 
                    Наша платформа обеспечивает безопасные сделки, верификацию партнеров 
                    и полный документооборот.
                  </p>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm">
                      <Icon name="FileText" size={16} className="mr-2" />
                      Документы
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Mail" size={16} className="mr-2" />
                      Связаться
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/90 backdrop-blur-md border-t border-primary/20 text-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary font-mono tech-glow">⚡ TECH MARKETPLACE</h3>
              <p className="text-foreground/70 text-sm font-mono">
                {">> Квантовая сеть корпоративных коннекторов"}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-cyan-400 font-mono">ЦИФРОВОЙ КАТАЛОГ</h4>
              <ul className="space-y-2 text-sm text-foreground/70 font-mono">
                <li><a href="#" className="hover:text-primary transition-colors">// Индустриальные модули</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">// Офисные системы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">// Мед-технологии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">// Все классы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-purple-400 font-mono">НЕЙРО-СЕРВИСЫ</h4>
              <ul className="space-y-2 text-sm text-foreground/70 font-mono">
                <li><a href="#" className="hover:text-primary transition-colors">// Квантовая верификация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">// Блокчейн-оборот</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">// Авто-логистика</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">// Крипто-платежи</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-green-400 font-mono">КОННЕКЦИЯ</h4>
              <ul className="space-y-2 text-sm text-foreground/70 font-mono">
                <li>tel://+7.495.XXX.XX.XX</li>
                <li>sys@techmarket.quantum</li>
                <li>node://moscow.blockchain.1</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary/20 mt-8 pt-8 text-center text-sm text-foreground/50">
            <p className="font-mono">&copy; 2024 TechMarketplace.exe | Квантовые права защищены НИИ</p>
          </div>
        </div>
      </footer>
    </div>
  );
}