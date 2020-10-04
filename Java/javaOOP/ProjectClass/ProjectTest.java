class ProjectTest {
    public static void main(String[] args) {
        Project projectOne = new Project();

        projectOne.setName("Color Palette Generator");
        projectOne.setDescription("Generates 4-5 colors at random to create a complimentary color palette.");

        String nameOne = projectOne.getName();
        String descOne = projectOne.getDescription();

        Project projectTwo = new Project("EasyShop", "e-commerce website");
        projectTwo.elevatorPitch(projectTwo);
    }
}