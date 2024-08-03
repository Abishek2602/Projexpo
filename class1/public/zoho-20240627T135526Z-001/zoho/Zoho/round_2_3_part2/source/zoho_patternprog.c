#include<stdio.h>
#include<conio.h>

int main()
{
int i,j,k,n=4,l; //i for row, j for element no

printf("\t\t\tZOHO INTERVIEW QUESTION\n\n");

    for(i=1;i<=n;i++) // row count
    {                     
                          
     for(k=1,l=n;k<i && l>=1;k++,l--) // k prints the values from starting till the row no
      printf("%d",l);
     
      for(j=k;j<=(n+n-1)-i+1;j++) //j in every row inserts values starting from i-1 to 7-i+1
       printf("%d",l);
     
       for(k=j;k<=n+n-1;k++) // k prints the remaining values
        {
        if(l<=n)
        printf("%d",++l);
        else
        printf("%d",n);
        }
     printf("\n");
    }
    
    for(i=n-1;i>=1;i--)
    {
     for(k=1,l=n;k<i;k++,l--)
      printf("%d",l);
     
       for(j=k;j<=(n+n-1)-i+1;j++)
        printf("%d",l);
     
        for(k=j;k<=n+n-1;k++)
        {
        if(l<=n)
        printf("%d",++l);
        else
        printf("%d",n);
         }
     printf("\n");
    }
    
getch();
}

/*
Print the pattern
N=4
4444444
4333334
4322234
4321234
4322234
4333334
4444444
*/
