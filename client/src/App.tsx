import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import DoolaAlternatives from "@/pages/doola-alternatives";
import TaxFilingPage from "./pages/tax-filling";
import { Component } from "lucide-react";
import Trademark from "./pages/trademark";
import Bookkeeping from "./pages/Book-keeping";
import Pricing from "./pages/Pricing";
import Incorporation from "./pages/Incorporation";
function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/doola-alternatives" component={DoolaAlternatives} />
      <Route path="/tax-filling" component={TaxFilingPage}/>
      <Route path="/trademark" component={Trademark}/>
      <Route path="/book-keeping" component={Bookkeeping}/>
      <Route path="/pricing" component={Pricing}/>
      <Route path="/incorporation" component={Incorporation}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
