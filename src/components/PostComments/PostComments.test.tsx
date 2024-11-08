import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from './index';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o botão Comentar', () => {
        render(<PostComment />);
        expect(screen.getByTestId('comment-button')).toBeInTheDocument();
    });

    it('Deve permitir a inserção de dois comentários', () => {
        render(<PostComment />);

        const commentInput = screen.getByTestId('comment-input');
        const commentButton = screen.getByTestId('comment-button');

        fireEvent.change(commentInput, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(commentButton);

        fireEvent.change(commentInput, { target: { value: 'Segundo comentário' } });
        fireEvent.click(commentButton);

        const comments = screen.getAllByTestId('comment-item');
        expect(comments.length).toBe(2);
    });
});
