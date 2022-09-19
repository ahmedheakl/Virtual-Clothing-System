int cur=0,ans=0;
for(int i=0;i<n;++i){
    cur=max(cur+a[i],a[i]);
    ans=max(ans,cur);
}