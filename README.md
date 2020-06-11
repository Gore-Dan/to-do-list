# to-do-list

Pentru implementarea aplicatiei am mers pe o arhitectura destul de simpla, am creat o clasa "ToDoListClass" de baza ce are 3 campuri: id, text si 
un camp denumit "completed", de tip boolean pentru a verifica cand un task din lista e facut.Id-ul e un integer ce il folosim ca 
parametru unic de identificare, iar text este un string pentru afisarea task-urile in lista.

Fiecare nou task pe care il punem in lista to-do este defapt o noua instanta a acestei clasa.Logica de baza prin care definim comportamentul 
aplicatiei a fost implementat intr-un Service, el se afla in folderul /services/to-do.service.ts.In acest service avem doua campuri, 
"curentId" ce este un integer, scopul lui principal este e a fi mereu iterat cand adaugam un element nou in lista si al folosi ca 
identificatorsi mai avem un array de obiecte, ca metode:

1.add(), primeste un obiect de tip ToDoListClass, verifica id-ul si va adauga un nou element de tipul ToDoListClass in array, desigur
incrementand id-ul curent.
2.deleteById(),sterge un element din array.
3.listCompleted(),primeste un obiect de tip ToDoListClass, scopul metodei este de a face update la lista si a modifica parametrul
"completed", face asta printr-o metoda ajutatoare updateById(), ce face update la un obiect din array
4.Doua gettere, unul pentru array-ul in care stocam obiectele (getAll) si un getter getById pentru identificare un obiect din array mai
usor.

In componenta principala aflata in folderul /to-do-list/to-do-list.componente.ts respectam aceiasi logica, avem un nou obiect pe care
il folosim in adaugarea de elemente noi in lista, ma refer la campul "ToDoObject" va fi mereu reinitializat de cate ori adaugam un nou 
element in lista.Obiectul este legat de interfata si este modificat de fiecare cand introducem ceva de la tastatura, de asta dorim 
sa nu lasam obiectul liber.

Avem acelasi metode principale pe care le avem si in service, in aceste metode doar le-am apelat pe cele din service.

Infertata este facut cu ajutorul HTML/CSS, ea se modifica de fiecare data cand adaugam/stergem elemente.Pentru adaugarea in lista doar 
scriem ce vrem sa avem intr-o casuta de tip text si apasam enter, stergerea se face prin intermediul unui un buton, ce este 
plasat in dreptul fiecarui item din lista, iar pentru marcarea listei ca completet avem cate un checkbox in stanga fiecarui item.



