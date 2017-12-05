
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const ContainerType = new GraphQLObjectType({
  name: 'ContainerTypeType',
  description: 'Type for ContainerType in product',

  fields: () => ({
    containerTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ContainerType};
    