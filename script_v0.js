/*this is a rudimentry script for put prupose, for it searches for INPUT and OUTPUT
 *by looking out for a specific <pre> htm tag. It is working now for SPOJ and Codechef
 *for their structre supports our hack(kinda). Conspicuosly, it will work for other sites
 *that follow the same format. However, we'll have to do ample string processing for
 *each website, since u can see difference between spoj and codechef's output. Thats all
 *from my side!. Best Luck! ~Shree
 */
var addr = window.location.href;

if(addr.search("spoj")!=-1)
  {
   alert("Its SPOJ.com, extracting...");
   var source="";// = "<html>";
   source += document.getElementsByTagName('pre')[0].innerHTML;
   //source += "</html>";
   //now we add <pre> tags to preserve whitespace
   //source = "<pre>"+source+"</pre>";
   //now open the window and set the source as the content
   alert(source);
   //to show in noew window -> do this
   //sourceWindow = window.open();
   //sourceWindow.document.write(source);
   //sourceWindow.document.close(); //close the document for writing, not the window
  }
else if(addr.search("codechef")!=-1)
  {
    alert("Its CodeChef, extracting...");
   var source = "";//"<html>";
   source += document.getElementsByTagName('pre')[0].innerHTML;
   alert(source);
  }
else
  {
    alert('Not a registered Site, currently this script is customized only for SPOJ and Codechef.');
  }