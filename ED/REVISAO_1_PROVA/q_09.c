#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;


void append_last(Node** head_ref, int new_data) {
    Node* new_node = (Node*)malloc(sizeof(Node));
    new_node->data = new_data;
    new_node->next = NULL;

    Node* p = *head_ref;

    if (*head_ref == NULL) {
        *head_ref = new_node;
        return;
    }

    while (p->next) {
        p = p->next;
    }

    p->next = new_node;
    return;
}


void append_first(Node **head_ref, int new_data) {
    Node *new_node = (Node*)malloc(sizeof(Node));
    new_node->data = new_data;
    new_node->next = *head_ref;
    *head_ref = new_node;

}


void printList(Node *node) {
    while (node) {
        printf("%d ", node->data);
        node = node->next;
    }
}



int main() {
    Node *head1 = NULL;

    append_last(&head1, 1);
    append_last(&head1, 2);
    append_last(&head1, 3);
    append_last(&head1, 4);
    printf("Lista encadeada adicionado elemento sempre no fim: ");
    printList(head1);
    printf("\n");

    Node *head2 = NULL;
    append_first(&head2, 1);
    append_first(&head2, 2);
    append_first(&head2, 3);
    append_first(&head2, 4);
    printf("Lista encadeada adicionado elemento sempre no inicio: ");
    printList(head2);
}
