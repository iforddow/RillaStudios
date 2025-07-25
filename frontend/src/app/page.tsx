import DefaultLayout from "@/components/layout/DefaultLayout";
import { Box, SimpleGrid } from "@mantine/core";

export default function HomePage() {
  return (
    <DefaultLayout>
      <section>
        <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="md">
          <Box w={"100%"} bg={"dark.8"} p={"xl"}>
            <h1>Welcome to Our Services</h1>
            <p>Explore our range of services designed to meet your needs.</p> 
          </Box>
          <Box w={"100%"} p={"xl"}>
            <h2>Our Offerings</h2>
            <p>We provide a variety of services including web development, mobile app development, and more.</p>
          </Box>
        </SimpleGrid>
      </section>
    </DefaultLayout>
  );
}
