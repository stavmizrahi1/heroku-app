import { Question } from './question.model';
import { KnowledgeItem } from 'src/app/components/chat/models/knowledge-item.model';

export interface Religion {
    _id?: string;
    name: string;
    suggestedQuestions?: Question[];
    knowledgeItems?: KnowledgeItem[];
}
