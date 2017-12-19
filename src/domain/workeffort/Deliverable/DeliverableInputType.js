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

const DeliverableInputType = new GraphQLInputObjectType({
  name: 'DeliverableInputType',
  description: 'input type for Deliverable',

  fields: () => ({
    deliverableId: {type: GraphQLString},
    deliverableName: {type: GraphQLString},
    deliverableTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {DeliverableInputType};
    