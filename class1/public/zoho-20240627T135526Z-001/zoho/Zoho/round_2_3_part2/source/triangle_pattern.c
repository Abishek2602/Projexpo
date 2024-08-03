#include<stdio.h>
#include<conio.h>

#define filled 1
#define empty 0

int left,diag,top,startx,starty;
int a[11][11],count[11][11],counter=0;
int N,i,j,num=1;

void init()
{
for(i=0;i<=10;i++)
 {
  for(j=0;j<=10;j++)
  {
   a[i][j]=0;
   count[i][j]=empty;
  }
 }
}

void move_diagnol()
{
 for(i=startx,j=starty;i<=diag && j<=diag ;i++,j++)
 {
  if(count[i][j]==filled)
  continue;
  a[i][j]=num;
  count[i][j]=filled;
  num++;
 }
}

void move_left()
{
 for(j=starty;j>=left;j--)
 {
  if(count[i][j]==filled)
  continue;
  a[i][j]=num;
  count[i][j]=filled;
  num++;
 }
}

void move_top()
{
 for(i=startx;i>=top;i--)
 {
  if(count[i][j]==filled)
  continue;
  a[i][j]=num;
  count[i][j]=filled;
  num++;
 }
}

void begin()
{
 while(counter<=3)
 {
 move_diagnol();
 --diag;

 starty=--j;
 startx=--i;
  
 move_left();
 left++;

 starty=++j;
 
 move_top();
 top++;
 ++i;
  
 startx=++i+1;
 starty=++j;
 
 counter++;
 } 
}

void display()
{
int i,j;
char c=" ";
    for(i=1;i<=10;i++)
    {
     for(j=1;j<=10;j++)
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

init();

printf("\nEnter the value of N: ");
scanf("%d",&N);

left=1;
top=1;
diag=N;

 startx=top;
 starty=top;
printf("\n\n");
begin();
display();

getch();
return 0;
}
