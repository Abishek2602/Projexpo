#include<stdio.h>
#include<string.h>
#include<conio.h>
#include<stdlib.h>

#define true 1
#define false 0

int used[15]={false};
char string1[50][15],string2[15];
char output[15];
int ptr=0,strcount=0;

void permute()
{
 if(strlen(output)==strlen(string2))
 {
  strcpy(string1[strcount],output);
  strcount++;
  return;
 }
 
 int i;
 
 for(i=0;i<strlen(string2);i++)
 {
  if(used[i])
  continue;
  
  output[ptr++]=string2[i];
  output[ptr]='\0';
  used[i]=true;
  permute();
  used[i]=false;
  ptr--;
 }
}

int check(int i)
{
 int j,k;
 for(j=0,k=strlen(string1[i])-1 ; j< strlen(string1[i])/2 ; j++,k--)
 {
  if(string1[i][j]!=string1[i][k])
  return -1;
 }
return 1;
}

void remove_duplicate()
{
 int i,j,k;
 for(i=0;i<strcount;i++)
  {
   for(j=i+1;j<strcount-1;j++)
    {
     if(strcmp(string1[i],string1[j])==0)
      {
       for(k=j;k<strcount-1;k++)
        {
         strcpy(string1[k],string1[k+1]);
        }
        strcount--;
      }
    }
  }
}

void palindrome()
{
 int i,pal;
 for(i=0;i<strcount;i++)
 {
  pal=check(i);
  if(pal==1)
  printf("\t \"%s\" can be converted to \"%s\" which is a palindrome\n\n",string2,string1[i]);
 }
}

int main()
{
printf("Enter String: ");
scanf("%s",string2);

printf("\n");
permute();
remove_duplicate();
palindrome();

getch();
return 0;
}
