import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { toast } from 'sonner';
import { calculateDistanceFromNow } from '../helpers/calculate-distance-from-now';
import { Note } from '../types/note';

interface NoteCardProps {
  note: Note;
  onNoteDeleted: (id: string) => void;
}

export function NoteCard({ note, onNoteDeleted }: NoteCardProps) {
  const handleDeleteNote = () => {
    onNoteDeleted(note.id);
    toast.success('Nota apagada com sucesso!');
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger className='rounded-md text-left flex flex-col bg-slate-800 gap-3 p-5 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400'>
        <span className='text-sm font-medium text-slate-300'>
          {calculateDistanceFromNow(note.date)}
        </span>
        <p className='text-sm leading-6 text-slate-400'>{note.content}</p>

        <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none'></div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 bg-black/50' />
        <Dialog.Content className='fixed overflow-hidden inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 max-w-[640px] w-full md:h-[60vh] bg-slate-700 md:rounded-md flex flex-col outline-none'>
          <Dialog.Close className='absolute top-5 right-5 text-slate-300 hover:text-slate-100'>
            <X className='size-5' />
          </Dialog.Close>

          <div className='flex flex-1 flex-col gap-3 p-5'>
            <span className='text-sm font-medium text-slate-300'>
              {calculateDistanceFromNow(note.date)}
            </span>

            <p className='text-sm leading-6 text-slate-400'>{note.content}</p>
          </div>

          <button
            type='button'
            onClick={handleDeleteNote}
            className='w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none font-medium group'
          >
            Deseja{' '}
            <span className='text-red-400 group-hover:underline'>
              apagar essa nota
            </span>
            ?
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
