import { FormData } from '../components/Contact';
import { useToast } from "@/components/ui/use-toast"
export function sendEmail(data: FormData) {
  const { toast } = useToast()
    const apiEndpoint = '/api/email';

    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        toast({
          description: response.message,
        });
      })
      .catch((err) => {
        alert(err);
      });
}