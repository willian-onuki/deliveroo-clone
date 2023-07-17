import { Image, Text, TouchableOpacity, View } from "react-native";

interface Props {
  imageUrl: string;
  title: string;
}

export function CategoryCard({
  imageUrl,
  title
}: Props) {
  return (
    <TouchableOpacity
      className="relative mr-2 "
    >
      <Image
        source={{ uri: imageUrl }}
        className='h-20 w-20 rounded'
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}
