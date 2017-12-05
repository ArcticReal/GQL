
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const SecurityGroup = new GraphQLObjectType({
  name: 'SecurityGroupType',
  description: 'Type for SecurityGroup in login',

  fields: () => ({
    groupId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {SecurityGroup};
    