import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

const DeliverableResponseType = new GraphQLObjectType({
  name: 'DeliverableResponseType',
  description: 'response type for Deliverable',

  fields: () => ({
    deliverableId: {type: GraphQLString},
    deliverableName: {type: GraphQLString},
    deliverableTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {DeliverableResponseType};
    