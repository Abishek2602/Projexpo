#include<stdio.h>
#include<conio.h>
#define left 1
#define down 2
#define right 3
#define up 4

int matrix[5][5]={{1,2,3,4,5},{6,7,8,9,10},{11,12,13,14,15},{16,17,18,19,20,21},{22,23,24,25,26}};
int i,j,direction=1,order=5,final_left,final_right,final_up,final_down;

void spiral()
{
while(i!=final_up-1 || j!=final_left-1)
 {
 switch(direction)
  {
 case left:
        while(j>=final_left-1)
         printf("%d ",matrix[i][j--]);
         j++;
         if(i==final_up-1 && j==final_left-1)
         break;
         i++;
         direction=down;
        break;
        
 case down:
        while(i<=final_down+1)
         printf("%d ",matrix[i++][j]);
         i--;
         j++;
         direction=right;
        break;
        
 case right:
        while(j<=final_right+1)
         printf("%d ",matrix[i][j++]);
         j--;
         i--;
         direction=up;
        break;
                  
 case up:
         while(i>=final_up-1)
         printf("%d ",matrix[i--][j]);
         i++;
         j--;
         direction=left;
         break;
  }

 }
}

int main()
{
for(i=0;i<order;i++)
{
                for(j=0;j<order;j++)
                 printf("%4d",matrix[i][j]);
 printf("\n");
}

printf("\n\n");
i=order/2;j=order/2;

final_left=order/2;
final_right=order/2;
final_up=order/2;
final_down=order/2;

while(final_left>0 && final_up>0)
{
spiral();
 final_left--;
 final_up--;
 final_right++;
 final_down++;
 
 i=final_up;
 j=final_left-1;
}

getch();
return 0;
}
