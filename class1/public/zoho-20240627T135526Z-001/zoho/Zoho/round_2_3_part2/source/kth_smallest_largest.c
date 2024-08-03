#include<stdio.h>
#include<conio.h>

int a[15]={1,4,5,3,12,45,63,32,134},n=9,k,temp[15],num;

void kth_largest()
{
int i,j;

 for(i=0;i<n;i++)
 temp[i]=a[i];

 for(i=0;i<k;i++)
 {
  for(j=0;j<n-1;j++)
   {
    if(temp[j]>temp[j+1])
    temp[j]=temp[j]+temp[j+1]-(temp[j+1]=temp[j]);
   }
 }

 printf("\n%d^th largest element= %d\n\n",k,temp[n-k]);
 
}

void kth_smallest()
{
 int i,j;

 for(i=0;i<n;i++)
 temp[i]=a[i];
 
  for(i=0;i<k;i++)
 {
  for(j=0;j<n-1;j++)
   {
    if(temp[j+1]>temp[j])
    temp[j]=temp[j]+temp[j+1]-(temp[j+1]=temp[j]);
   }
 }

 
 printf("\n%d^th smallest element= %d\n\n",k,temp[n-k]);
 
}

int main()
{
printf("\nEnter the value of k: ");
scanf("%d",&k);

int i;
for(i=0;i<n;i++)
printf("%d ",a[i]);
printf("\n\n");

kth_largest();
kth_smallest();

getch();
return 0;
}
