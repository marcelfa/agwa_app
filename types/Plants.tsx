interface Plants{

    plants: [Plant];
}

interface Plant {
    id: number;
    name: string;
    imageId: string;
    seedToCrop: string;
    yield: string;
    lifeCycle: string;
    description: string;
    nutritionFacts: NutritionFacts;

  }

  interface NutritionFacts{
    portionInfo: string;
    items: [ItemAttributes];
  }

  interface ItemAttributes{
    key: string;
    nutrientValue: string;
    percentageOfRDA: string;
  }