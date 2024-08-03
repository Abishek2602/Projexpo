#include<stdio.h>
#include<conio.h>
/*Print the following pattern given width (odd number) and height(should be multiple of width)
Width 7
Height 21

(dna pattern)
*/
int main()
{
 int i,j,n=7,H,h;
 printf("\nEnter the height: ");
 scanf("%d",&H);
 printf("\nDNA Pattern\n\n");
 
for(h=1;h<=H;h++)
 {
   for(i=4;i>=1;i--)
   {
   
    for(j=4;j>=1;j--)
    {
     if(j==i)
     printf("*");
     else
     printf(" ");
    }

    for(j=1;j<=4;j++)
    {
     if(j==i)
     printf("*");
     else
     printf(" ");
    }
   printf("\n");
   }
  
   for(i=2;i<=4;i++)
   {
    for(j=4;j>=1;j--)
    {
     if(j==i)
     printf("*");
     else
     printf(" ");
    }

    for(j=1;j<=4;j++)
    {
     if(j==i)
     printf("*");
     else
     printf(" ");
    }
    printf("\n");   
   }
 }
 getch();
 return 0;
}
