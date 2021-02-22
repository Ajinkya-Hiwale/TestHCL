package pages;

public class payload {

	public static String input(String input)

	{
		if (input.equals("input1")) {
			return "{\n" + "  \"external_id\": \"HCLTest1\",\n" + "  \"name\": \"HCLPUNE\",\n" + "  \"latitude\": 37.76,\n"
					+ "  \"longitude\": -122.43,\n" + "  \"altitude\": 150\n" + "}";
		}

		else {

			return "{\n" + "  \"external_id\": \"HCLTest2\",\n" + "  \"name\": \"HCLMUMBAI\",\n"
					+ "  \"latitude\": 37.76,\n" + "  \"longitude\": -122.43,\n" + "  \"altitude\": 150\n" + "}";

		}
	}
}
