import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function calculateDistanceFromNow(date: Date) {
  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
}
