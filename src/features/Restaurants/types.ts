export type Restaurant = {
  address1: string;
  attire: string;
  city: string;
  genre: string;
  hours: string;
  id: string;
  lat: string;
  long: string;
  name: string;
  state: string;
  tags: string;
  telephone: string;
  website: string;
  zip: string;
};

export interface RestaurantState {
  isLoading: boolean;
  error: string | null;
  restaurantData: Restaurant[];
}
