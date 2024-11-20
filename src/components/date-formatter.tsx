import { parseISO, format } from "date-fns";
import { ptBR } from "date-fns/locale"; // Importa o locale para português do Brasil

type Props = {
	dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
	const date = parseISO(dateString);
	return (
		<time dateTime={dateString}>
			{format(date, "d 'de' MMMM 'de' yyyy", { locale: ptBR })}
		</time>
	);
};

export default DateFormatter;
