import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-slate-800">B2B MARKETPLACE</h1>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-slate-600 hover:text-primary transition-colors">Главная</a>
              <a href="#" className="text-slate-600 hover:text-primary transition-colors">Каталог</a>
              <a href="#" className="text-slate-600 hover:text-primary transition-colors">Личный кабинет</a>
              <a href="#" className="text-slate-600 hover:text-primary transition-colors">Заказы</a>
              <a href="#" className="text-slate-600 hover:text-primary transition-colors">Поддержка</a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="outline">Войти</Button>
              <Button>Регистрация</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Платформа для B2B торговли
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Объединяем юридических лиц для эффективного ведения бизнеса
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input 
              placeholder="Поиск товаров и поставщиков" 
              className="bg-white text-slate-800 border-0"
            />
            <Button size="lg" variant="secondary">
              <Icon name="Search" size={20} className="mr-2" />
              Найти
            </Button>
          </div>
        </div>
      </section>

      {/* Verification System */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Система верификации</h3>
            <p className="text-lg text-slate-600">Работайте только с проверенными компаниями</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Юридическая проверка</h4>
              <p className="text-slate-600">Проверка документов и регистрации компании</p>
              <Badge className="mt-4 bg-green-100 text-green-700">Активно</Badge>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="FileText" size={32} className="text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Документооборот</h4>
              <p className="text-slate-600">Электронный документооборот и договоры</p>
              <Badge className="mt-4 bg-blue-100 text-blue-700">Доступно</Badge>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Рейтинг надежности</h4>
              <p className="text-slate-600">Система оценки и отзывов партнеров</p>
              <Badge className="mt-4 bg-purple-100 text-purple-700">Премиум</Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800">Каталог товаров</h3>
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
                      <Badge variant="secondary">Промышленность</Badge>
                      <Badge className="bg-green-100 text-green-700">Верифицировано</Badge>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">CNC станок промышленный</h4>
                    <p className="text-slate-600 text-sm mb-4">Высокоточное оборудование для автоматизированного производства</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">₽ 2 450 000</span>
                      <Button size="sm">В корзину</Button>
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
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Orders Management */}
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Управление заказами</h3>
              <div className="space-y-4">
                <Card className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback>ТК</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">Заказ #B2B-2024-001</h4>
                        <p className="text-sm text-slate-600">ООО "ТехКомплект"</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Выполнен</Badge>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm text-slate-600">CNC станок промышленный</span>
                    <span className="font-semibold">₽ 2 450 000</span>
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
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Поддержка и контакты</h3>
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Headphones" size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Техническая поддержка</h4>
                      <p className="text-sm text-slate-600">24/7 помощь специалистов</p>
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
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">B2B MARKETPLACE</h3>
              <p className="text-slate-300 text-sm">
                Надежная платформа для торговли между юридическими лицами
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-white">Промышленное оборудование</a></li>
                <li><a href="#" className="hover:text-white">Офисная мебель</a></li>
                <li><a href="#" className="hover:text-white">Медицинское оборудование</a></li>
                <li><a href="#" className="hover:text-white">Все категории</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-white">Верификация компаний</a></li>
                <li><a href="#" className="hover:text-white">Документооборот</a></li>
                <li><a href="#" className="hover:text-white">Логистика</a></li>
                <li><a href="#" className="hover:text-white">Финансирование</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>+7 (495) 123-45-67</li>
                <li>info@b2bmarket.ru</li>
                <li>Москва, Красная площадь, 1</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
            <p>&copy; 2024 B2B Marketplace. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}