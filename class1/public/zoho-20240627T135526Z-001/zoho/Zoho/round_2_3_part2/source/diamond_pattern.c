#include<stdio.h>
#include<conio.h>

int a[16][16],num=1;
int i,j,N,startx,starty,count=1;

void init()
{
                 for(i=0;i<=15;i++)
                  {
                   for(j=0;j<=15;j++)
                    {
                     a[i][j]=0;
                    }
                  }
}

void move_diagnol()
{
 int counter;
 for(i=startx,j=starty,counter=1; counter<=N ; counter++,i++,j++,num++)
  a[i][j]=num;
}

begin()
{
while(count<=N)
 {
 move_diagnol();
 startx++;
 starty--;
 count++;
 }
}

void display()
{
 int i,j;
 char c=" ";
  for(i=1;i<=15;i++)
   {
    for(j=1;j<=15;j++)
    {
     if(a[i][j])
     printf("%4d",a[i][j]);
     else
     printf("%4c",c);
    }
    printf("\n");
   }
}

int main()
{
printf("\nEnter the value of N: ");
scanf("%d",&N);

startx=1;
starty=N;

printf("\nDiamond Pattern\n\n");

begin();
display();

getch();
return 0;
}
