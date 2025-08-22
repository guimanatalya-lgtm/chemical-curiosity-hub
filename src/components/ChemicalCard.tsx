import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ChemicalCardProps {
  title: string;
  formula: string;
  description: string;
  dailyUse: string;
  image?: string;
  gradient?: 'primary' | 'secondary';
}

const ChemicalCard = ({ 
  title, 
  formula, 
  description, 
  dailyUse, 
  image,
  gradient = 'primary' 
}: ChemicalCardProps) => {
  return (
    <Card className="group hover:shadow-chemical transition-all duration-300 hover:-translate-y-2 bg-card border-0 shadow-card-custom overflow-hidden">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      
      <CardHeader className={`${gradient === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-secondary'} text-primary-foreground`}>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          <span className="text-lg font-mono bg-card/20 px-3 py-1 rounded-full">
            {formula}
          </span>
        </div>
        <CardDescription className="text-primary-foreground/80 text-base">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-foreground mb-2 text-lg">Uso no Dia a Dia:</h4>
            <p className="text-muted-foreground leading-relaxed">{dailyUse}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChemicalCard;