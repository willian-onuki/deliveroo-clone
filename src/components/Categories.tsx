import { ScrollView, Text, View } from 'react-native';
import { CategoryCard } from './CategoryCard';
import { Category } from '../../typings';
import { useEffect, useState } from 'react';
import { client, urlFor } from '../../sanity';

export function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    client.fetch(`
      *[_type=="category"] {
        ...,
      }
    `).then((data) => {
      setCategories(data)
    });
  }, [])

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 14,
        paddingTop: 10,
      }}
    >
      {
        categories?.map((category) => (
          <CategoryCard
            key={category._id}
            imageUrl={String(urlFor(category.image))}
            title={category.name}
          />
        ))
      }
    </ScrollView>
  );
}
