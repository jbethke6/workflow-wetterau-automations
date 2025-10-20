import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from '../components/Navigation';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

const Blog = () => {
  const [blogPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: 'Warenkorb-Abbrüche reduzieren: 5 bewährte Automatisierungsstrategien',
      excerpt: 'Erfahren Sie, wie intelligente Automatisierung die Warenkorb-Wiederherstellungsrate von durchschnittlich 2% auf über 15% steigern kann.',
      content: 'Vollständiger Artikel hier...',
      date: '2025-01-15',
      readTime: '5 Min',
      category: 'E-Commerce Optimierung',
      image: '/lovable-uploads/a3ae3069-fb9b-4634-999f-33a6fa48c0ba.png'
    },
    {
      id: '2',
      title: 'KI-Chatbots: Der Gamechanger für Online-Shop-Support',
      excerpt: 'Wie moderne KI-Chatbots 70% der Kundenfragen automatisch beantworten und gleichzeitig die Kundenzufriedenheit erhöhen.',
      content: 'Vollständiger Artikel hier...',
      date: '2025-01-10',
      readTime: '7 Min',
      category: 'KI & Automatisierung',
      image: '/lovable-uploads/77984400-f083-44ea-8ff7-bd541486e149.png'
    },
    {
      id: '3',
      title: 'Multi-Channel Bestandsverwaltung: Schluss mit Überverkäufen',
      excerpt: 'So synchronisieren Sie Ihre Bestände in Echtzeit über alle Verkaufskanäle und vermeiden kostspielige Fehler.',
      content: 'Vollständiger Artikel hier...',
      date: '2025-01-05',
      readTime: '6 Min',
      category: 'Bestandsverwaltung',
      image: '/lovable-uploads/386cff32-acdb-40b5-aa40-6416bb2aa575.png'
    }
  ]);

  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-12 md:py-16 lg:py-20 gradient-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Yami-AI <span className="text-orange-700">Blog</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tipps, Strategien und Einblicke zur Automatisierung Ihres Online-Shops
            </p>
          </div>

          {/* Blog Posts Grid */}
          {!selectedPost ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {post.image && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString('de-DE')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <Button 
                      variant="outline"
                      className="w-full border-orange-700 text-orange-700 hover:bg-orange-50"
                      onClick={() => setSelectedPost(post)}
                    >
                      Weiterlesen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            // Single Blog Post View
            <div className="max-w-4xl mx-auto">
              <Button 
                variant="outline"
                className="mb-6"
                onClick={() => setSelectedPost(null)}
              >
                ← Zurück zur Übersicht
              </Button>

              <Card className="p-8">
                {selectedPost.image && (
                  <img 
                    src={selectedPost.image} 
                    alt={selectedPost.title}
                    className="w-full h-96 object-cover rounded-lg mb-6"
                  />
                )}

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(selectedPost.date).toLocaleDateString('de-DE')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                    {selectedPost.category}
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {selectedPost.title}
                </h1>

                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {selectedPost.content}
                  </p>
                  
                  <p className="text-gray-600 mt-6">
                    Dieser Blogbeitrag ist ein Platzhalter. Um Ihren eigenen Content hier einzufügen, 
                    bearbeiten Sie die Datei <code>src/pages/Blog.tsx</code> und fügen Sie Ihre 
                    Artikel im <code>blogPosts</code> Array ein.
                  </p>

                  <div className="mt-8 p-6 bg-orange-50 rounded-lg border border-orange-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Bereit, Ihren Shop zu automatisieren?
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Lassen Sie uns gemeinsam herausfinden, wie Sie von Automatisierung profitieren können.
                    </p>
                    <Button 
                      className="bg-orange-700 hover:bg-orange-800"
                      onClick={() => window.location.href = '/#contact'}
                    >
                      Kostenlose Analyse anfordern
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* SEO-optimized section */}
          <div className="mt-16 text-center">
            <Card className="p-8 bg-gray-50">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                SEO-Hinweis für Blog-Verwaltung
              </h2>
              <div className="text-left max-w-3xl mx-auto space-y-4 text-gray-700">
                <p>
                  <strong>So fügen Sie neue Blogbeiträge hinzu:</strong>
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Öffnen Sie die Datei <code className="bg-gray-200 px-2 py-1 rounded">src/pages/Blog.tsx</code></li>
                  <li>Finden Sie das <code className="bg-gray-200 px-2 py-1 rounded">blogPosts</code> Array</li>
                  <li>Fügen Sie einen neuen Eintrag mit folgender Struktur hinzu:</li>
                </ol>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto text-sm">
{`{
  id: '4',
  title: 'Ihr Artikeltitel',
  excerpt: 'Kurze Zusammenfassung (160 Zeichen)',
  content: 'Vollständiger Artikeltext hier...',
  date: '2025-01-20',
  readTime: '5 Min',
  category: 'Kategorie',
  image: '/pfad/zum/bild.jpg'
}`}
                </pre>
                <p>
                  <strong>SEO-Tipps:</strong> Verwenden Sie aussagekräftige Titel mit relevanten Keywords, 
                  schreiben Sie einzigartige Meta-Descriptions (excerpt), und strukturieren Sie Ihren Content 
                  mit Überschriften und Absätzen.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
