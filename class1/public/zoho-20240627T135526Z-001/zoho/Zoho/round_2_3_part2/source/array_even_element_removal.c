#include<stdio.h>
#include<conio.h>
#define true 1
#define false -1

/*
1)

Input array 1,2,3,4,5,6

Output 1,3,5,0,0,0

Remove even nos and fill it with zeros

U can use only one loop for ur logic

Two variables apart from the array.

*/


int main()
{
int a[10]={3,4,5,2,1,8,9,10};
int n=7;
int i=0,j=0,l=0,even=true,zeros=false,sort=false,startprint=false,print=false;

    for(i=0; even==true || sort==false || zeros==false; )
    {
     //even no=0

    if(even==true)
    {
     if(j<n)
     {
     if(a[j]%2==0)
     a[j]=0;
     j++;
     }
     else
     {
     even=false;
     j=0;
     }           
    }
     //sort
     
     if(even==false && sort==false)
     {
      if(j<n-1)
      {
              if(a[j]>a[j+1])
              {
              a[j]=a[j]+a[j+1]-(a[j+1]=a[j]);
              j++;
              }
              else
              j++;
      }
      else
      {
      i++;
      if(i>=n)
      sort=true;
      j=0;
      }
     }
     
     //print
     if(sort==true && zeros==false)
     {
      if(startprint==false)
      {
      if(a[j]==0)
      j++;
      else
      startprint=true;
      }
      
      else
      {
       if(print==false)
       {
       i=j;
       print=true;
       }
       else if(print==true)
      {
       if(i<n)
       {
       a[l]=a[l]+a[i]-(a[i]=a[l]);
       i++;
       }
        
       if(l<n)
       {
       printf("%d ",a[l++]);
       }
        
       else
       zeros=true;
       
      }
     }
      
     }
     
    }
   
getch();
return 0;
}
