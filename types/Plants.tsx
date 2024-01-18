interface Plants{

    plants: [Plant];
}

interface Plant {
    id: string;
    name: string;
    imageId?: string;
    seedToCrop?: string;
    yield?: string;
    lifeCycle?: string;
    description?: string;
    nutritionFacts?: NutritionFacts;

  }

  interface NutritionFacts{
    portionInfo?: string;
    items?: [ItemAttributes];
  }

  interface ItemAttributes{
    key?: string;
    nutrientValue?: string;
    percentageOfRDA?: string;
  }

  interface Category{
    id: string;
    name: string;
    minSelection?: number;
    maxSelection?: number;
    plants: [Plant]
  }

  interface Categories{

    categories: [Category];
}